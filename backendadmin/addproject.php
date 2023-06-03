<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'connect.php';
$conn = (new config())->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (
    !isset($data->description) ||
    !isset($data->title) ||
    !isset($data->start_date) ||
    !isset($data->end_date) ||
    !isset($data->code_cat) ||
    !isset($data->project_country) ||
    !isset($data->project_holder) ||
    !isset($_GET['image_url'])
) {
    echo json_encode([
        'success' => 0,
        'message' => 'Please enter all required fields: description, title, start_date, end_date, code_cat, project_country, project_holder, and provide the image URL.'
    ]);
    exit;
}

$title = htmlspecialchars(trim($data->title));
$description = htmlspecialchars(trim($data->description));
$start_date = htmlspecialchars(trim($data->start_date));
$end_date = htmlspecialchars(trim($data->end_date));
$code_cat = htmlspecialchars(trim($data->code_cat));
$project_country = htmlspecialchars(trim($data->project_country));
$project_holder = htmlspecialchars(trim($data->project_holder));
$image_Url = htmlspecialchars(trim((string)$_GET['image_url']));
// echo ("imageurl =" + $image_Url);

try {
    $query = "INSERT INTO `projects` (
        title,
        description,
        start_date,
        end_date,
        code_cat,
        project_country,
        project_holder,
        image_url
    ) 
    VALUES (
        :title,
        :description,
        :start_date,
        :end_date,
        :code_cat,
        :project_country,
        :project_holder,
        :image_url
    )";

    $stmt = $conn->prepare($query);

    $stmt->bindValue(':title', $title, PDO::PARAM_STR);
    $stmt->bindValue(':description', $description, PDO::PARAM_STR);
    $stmt->bindValue(':start_date', $start_date, PDO::PARAM_STR);
    $stmt->bindValue(':end_date', $end_date, PDO::PARAM_STR);
    $stmt->bindValue(':code_cat', $code_cat, PDO::PARAM_STR);
    $stmt->bindValue(':project_country', $project_country, PDO::PARAM_STR);
    $stmt->bindValue(':project_holder', $project_holder, PDO::PARAM_STR);
    $stmt->bindValue(':image_url', $image_Url, PDO::PARAM_STR_CHAR);

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
        'message' => 'There is some problem in data insertion.'
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
