<?php

$orderId = "SPG-" . time();
$url = "https://store-8721e-default-rtdb.firebaseio.com/orders/$orderId.json";

$data = [
    "orderId" => $orderId,
    "status" => "Processing",
    "orderTimestamp" => time(),
    "estimatedDelivery" =>
        date("Y-m-d", strtotime("+5 days")),
        "customerEmail" => $email,
    "products" => $cart
];
    

$options = [
    "http" => [
        "method" => "PUT",
        "header" => "Content-Type: application/json\r\n",
        "content" => json_encode($data)
    ]
];

$context = stream_context_create($options);

$result = file_get_contents($url, false, $context);
echo "Order Stored Successfully";

?>