<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'itemName', 'price', 'quantity','supplier_id',"key", "description"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    public function supplier()
    {
        return $this->belongsTo('App\Supplier');
    }
    public function images()
    {
        return $this->hasMany('App\ListingImage');
    }
}
