<?php

namespace App\Filament\Resources\ExperienceTypeResource\Pages;

use App\Filament\Resources\ExperienceTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListExperienceTypes extends ListRecords
{
    protected static string $resource = ExperienceTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
