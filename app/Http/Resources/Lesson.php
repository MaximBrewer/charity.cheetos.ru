<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class Lesson extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'excerpt' => $this->excerpt,
            'body' => $this->body,
            'number' => $this->number,
            'video' => $this->video,
            'prologue' => $this->prologue,
            'kind' => $this->kind,
            'image' => Voyager::image($this->thumbnail('small')),
            'o' => false,
            'y' => null
        ];
    }
}
