<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ExperienceResource\Pages;
use App\Filament\Resources\ExperienceResource\RelationManagers;
use App\Models\Experience;
use App\Models\ExperienceType;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Concerns\HasForms;
use Filament\Forms\Components\Section;
use Filament\Forms\Get;

class ExperienceResource extends Resource
{
    protected static ?string $model = Experience::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make("Experience Information")
                    ->description("Basic information about experience")
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('subtitle')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Select::make('experience_type_id')
                            ->relationship('experienceType', 'name')
                            ->reactive()
                            ->live(),
                        Forms\Components\Textarea::make('description')
                            ->required()
                            ->columnSpan(3),
                        Forms\Components\DatePicker::make('start_date')
                            ->required()
                            ->closeOnDateSelection()
                            ->prefixIcon("heroicon-o-arrow-left-start-on-rectangle"),
                        Forms\Components\DatePicker::make('end_date')
                            ->hidden(fn(Get $get): bool => $get('is_current'))
                            ->closeOnDateSelection()
                            ->prefixIcon("heroicon-o-arrow-right-end-on-rectangle"),
                        Forms\Components\Toggle::make('is_current')
                            ->required()
                            ->live()
                            ->inline(false),

                    ])
                    ->compact()
                    ->columns(3),
                Section::make("Education Information")
                    ->schema([
                        Forms\Components\TextInput::make('grade')
                            ->maxLength(255)
                            ->reactive()
                            ->visible(
                                function (Get $get): bool {
                                    $experienceTypeId = $get('experience_type_id');
                                    $educationTypeId = ExperienceType::where('name', 'Education')->first()->id;
                                    return $experienceTypeId == $educationTypeId;
                                }
                            )
                            ->live(),
                    ])
                    ->reactive()
                    ->visible(
                        function (Get $get): bool {
                            $experienceTypeId = $get('experience_type_id');
                            $educationTypeId = ExperienceType::where('name', 'Education')->first()->id;
                            return $experienceTypeId == $educationTypeId;
                        }
                    )
                    ->live(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('subtitle')
                    ->searchable(),
                Tables\Columns\TextColumn::make('start_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_current')
                    ->boolean(),
                Tables\Columns\TextColumn::make('end_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('grade')
                    ->searchable(),
                Tables\Columns\TextColumn::make('experienceType.name')
                    ->badge()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListExperiences::route('/'),
            'create' => Pages\CreateExperience::route('/create'),
            'edit' => Pages\EditExperience::route('/{record}/edit'),
        ];
    }
}
