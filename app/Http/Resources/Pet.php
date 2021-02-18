<?php

namespace App\Http\Resources;

use TCG\Voyager\Facades\Voyager;

use Illuminate\Http\Resources\Json\JsonResource;

class Pet extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // $images = [];
        // foreach ($this->images as $image) {
        //     $images[] = Voyager::image($this->getThumbnail($image, 'small'));
        // }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'kind' => $this->kind,
            'excerpt' => $this->excerpt,
            'body' => $this->body,
            'city_id' => $this->city_id,
            'partner_id' => $this->partner_id,
            'image' => Voyager::image($this->thumbnail('medium')),
            'images' => array_map(function ($image) {
                return Voyager::image($this->getThumbnail($image, 'medium'));
            }, json_decode($this->images))
        ];
    }
}
