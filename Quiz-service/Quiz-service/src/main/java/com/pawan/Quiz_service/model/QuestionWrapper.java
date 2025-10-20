package com.pawan.Quiz_service.model;

import lombok.Data;

@Data
//@Entity
public class QuestionWrapper {

    private Integer id;
    private String question;
    private String optionA;
    private String optionB;

    private String optionC;
    private String optionD;

    public QuestionWrapper(Integer id, String question, String optionA, String optionB, String optionC, String optionD) {
        this.id = id;
        this.question = question;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
    }
}
