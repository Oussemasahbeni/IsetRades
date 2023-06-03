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



if (!isset($data->event_id) || !isset($data->title)  || !isset($data->start_date) || !isset($data->end_date) || !isset($data->code_cat)) :

    echo json_encode([
        'success' => 0,
        'message' => 'Please enter compulsory fileds |  id, description and name',
    ]);
    exit;

elseif (empty(trim($data->event_id)) || empty(trim($data->title)) || empty(trim($data->code_cat))) :

    echo json_encode([
        'success' => 0,
        'message' => 'Field cannot be empty. Please fill all the fields.',
    ]);
    exit;

endif;

try {

    $event_id = htmlspecialchars(trim($data->event_id));
    $title = htmlspecialchars(trim($data->title));
    $description = htmlspecialchars(trim($data->description));
    $start_date = htmlspecialchars(trim($data->start_date));
    $end_date = htmlspecialchars(trim($data->end_date));
    $organizer= htmlspecialchars(trim($data->$organizer));
    $contact_email= htmlspecialchars(trim($data->$contact_email));
    $contact_phone= htmlspecialchars(trim($data->$contact_phone));
    $code_cat= htmlspecialchars(trim($data->code_cat));


    $query = "INSERT INTO `events`(
    event_id,
    title,
    description,
    start_date,
    end_date,
    organizer,
    contact_email,
    contact_phone,
    code_cat
    ) 
    VALUES(
    :event_id,
    :title,
    :description,
    :start_date,
    :end_date,
    :organizer,
    :contact_email,
    :contact_phone,
    :code_cat
    )";

    $stmt = $conn->prepare($query);

    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->bindValue(':title', $id, PDO::PARAM_INT);
    $stmt->bindValue(':description', $description, PDO::PARAM_STR);
    $stmt->bindValue(':start_date', $start_date, PDO::PARAM_STR);
    $stmt->bindValue(':end_date', $end_date, PDO::PARAM_STR);
    $stmt->bindValue(':organizer', $end_date, PDO::PARAM_STR);
    $stmt->bindValue(':contact_email', $end_date, PDO::PARAM_STR);
    $stmt->bindValue(':contact_phone', $end_date, PDO::PARAM_STR);
    $stmt->bindValue(':code_cat', $name, PDO::PARAM_STR);



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
