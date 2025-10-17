package com.pawan.Quiz_service.model;

import lombok.Data;

@Data
public class QuizDto {
    String category;
    Integer numberOfQuestions;
    String title;
}
