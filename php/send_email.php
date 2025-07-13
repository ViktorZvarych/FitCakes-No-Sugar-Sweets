<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Отримання даних з форми
    $name = htmlspecialchars(strip_tags(trim($_POST["form-name"])));
    $email = filter_var(trim($_POST["form-email"]), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags(trim($_POST["form-phone"])));
    $subject = htmlspecialchars(strip_tags(trim($_POST["form-subject"])));
    $message = htmlspecialchars(strip_tags(trim($_POST["form-message"])));

    // 2. Валідація даних (базова)
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo "Будь ласка, заповніть всі поля форми.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Будь ласка, введіть коректну адресу електронної пошти.";
        exit;
    }

    if (empty($phone)) {
        echo "Будь ласка, введіть номер телефону.";
        exit;
    }

    if (!preg_match('/^[0-9\s\+\-\(\)]{6,20}$/', $phone)) {
        echo "Будь ласка, введіть коректний номер телефону.";
        exit;
    }


    // 3. Параметри листа
    $to = "viktor.zvarych@gmail.com";
    $email_subject = "Нове повідомлення з вашого сайту: $subject";
    $email_body = "Вам надійшло нове повідомлення з форми зворотного зв'язку.\n\n" .
        "Ім'я: $name\n" .
        "Email: $email\n" .
        "Телефон: $phone\n" .
        "Тема: $subject\n" .
        "Повідомлення:\n$message";
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 4. Відправка листа
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Успішна відправка - перенаправлення
        header("Location: ../success.html");
        exit;
    } else {
        http_response_code(500);
        echo "Виникла помилка під час надсилання повідомлення. Будь ласка, спробуйте пізніше.";
    }
} else {
    http_response_code(405);
    echo "Невірний метод запиту.";
}