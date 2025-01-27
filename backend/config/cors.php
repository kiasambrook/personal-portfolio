<?php
return [

/*
|--------------------------------------------------------------------------
| Default CORS Settings
|--------------------------------------------------------------------------
|
| Here you may configure the settings for handling Cross-Origin Resource
| Sharing (CORS). This will allow or restrict which origins are allowed to
| make requests to your application, and which HTTP methods are allowed.
|
*/

'paths' => ['api/*', '/projects'],  // Include the specific paths you want to allow, such as '/projects'

'allowed_methods' => ['*'],  // This allows all HTTP methods like GET, POST, PUT, DELETE, etc.

'allowed_origins' => ['*'],  // This allows requests only from your React frontend

'allowed_headers' => ['*'],  // This allows all headers to be sent in the request

'exposed_headers' => [],

'max_age' => 0,

'supports_credentials' => false,  // Set to true if you need to send cookies or authentication headers
];
