<?php
// Path to store the free text
$file_path = 'free-text-d2.json';

// Handle GET request to fetch saved text
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file_path)) {
        $data = file_get_contents($file_path);
        echo $data;
    } else {
        echo json_encode(['text' => '']);
    }
    exit;
}

// Handle POST request to save the text
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (isset($input['text'])) {
        file_put_contents($file_path, json_encode(['text' => $input['text']]));
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
    }
    exit;
}

// If no valid request method, return error
http_response_code(405);
echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);