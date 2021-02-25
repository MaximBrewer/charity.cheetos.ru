<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class Partner extends JsonResource
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
            'body' => $this->body,
            'site' => $this->site,
            'slug' => $this->slug,
            'vk' => $this->vk,
            'instagram' => $this->instagram,
            'tiktok' => $this->tiktok,
            'excerpt' => $this->excerpt,
            'image' => Voyager::image($this->thumbnail('small'))
        ];
    }
}
