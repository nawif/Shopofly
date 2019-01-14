<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use App\Supplier;


class SupplierController extends Controller
{
    //
    public function store(Request $request){
        // $user=$this->getAuthenticatedUser();
        $validator = Validator::make($request->all(),[
            'supplierName' => 'required| min:2| max:35',
            'description' => 'min:10| max:500'
        ]);
        if ($validator->fails()) {
            return new Response(['error'=>"validator", 'cause by' => $validator->messages()->first()],400);
       }
        $credentials = $request->only('supplierName','description');
        $Supplier = Supplier::create($credentials);
        if (!$Supplier){
            return new Response(['error'=>"error", 'user' => $Supplier],400);
        }
        return new Response(['Done'=>"done", 'user' => $Supplier],400);
    }

    public function getAuthenticatedUser()
    {
            try {

                    if (! $user = JWTAuth::parseToken()->authenticate()) {
                            return response()->json(['user_not_found'], 404);
                    }
            } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

                    return response()->json(['token_expired'], $e->getStatusCode());

            } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

                    return response()->json(['token_invalid'], $e->getStatusCode());

            } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

                    return response()->json(['token_absent'], $e->getStatusCode());
            }

            return response()->json(compact('user'));
    }
}
