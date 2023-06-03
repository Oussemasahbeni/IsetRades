<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");




$method = $_SERVER['REQUEST_METHOD'];


if ($method == "OPTIONS") {
    die();
}


if ($_SERVER['REQUEST_METHOD'] !== 'POST') :

    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request!.Only POST method is allowed',
    ]);
    exit;
endif;

require 'connect.php';
$database = new config();
$conn = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));



if (!isset($data->name) || !isset($data->subject)  || !isset($data->email) || !isset($data->phone) || !isset($data->text)) :

    echo json_encode([
        'success' => 0,
        'message' => 'Please enter compulsory fileds |  id, description and name',
    ]);
    exit;

elseif (empty(trim($data->name)) || empty(trim($data->subject)) || empty(trim($data->text))) :

    echo json_encode([
        'success' => 0,
        'message' => 'Field cannot be empty. Please fill all the fields.',
    ]);
    exit;

endif;

try {

    $name = htmlspecialchars(trim($data->name));
    $subject = htmlspecialchars(trim($data->subject));
    $email = htmlspecialchars(trim($data->email));
    $phone = htmlspecialchars(trim($data->phone));
    $text = htmlspecialchars(trim($data->text));


    $query = "INSERT INTO `userscontact`(
    name,
    subject,
    email,
    phone,
    text
    ) 
    VALUES(
    :name,
    :subject,
    :email,
    :phone,
    :text
    )";

    $stmt = $conn->prepare($query);

    $stmt->bindValue(':name', $name, PDO::PARAM_STR);
    $stmt->bindValue(':subject', $subject, PDO::PARAM_STR);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
    $stmt->bindValue(':text', $name, PDO::PARAM_STR);



    if ($stmt->execute()) {

        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Data Inserted Successfully.'
        ]);
        exit;
    }

    echo json_encode([
        'success' => 0,
        'message' => 'There is some problem in data inserting'
    ]);
    exit;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
