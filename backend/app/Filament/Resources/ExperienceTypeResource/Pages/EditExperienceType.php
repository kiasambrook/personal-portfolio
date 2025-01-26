<?php

namespace App\Filament\Resources\ExperienceTypeResource\Pages;

use App\Filament\Resources\ExperienceTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditExperienceType extends EditRecord
{
    protected static string $resource = ExperienceTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
