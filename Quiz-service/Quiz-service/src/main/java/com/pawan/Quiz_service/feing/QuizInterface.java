package com.pawan.Quiz_service.feing;


import com.pawan.Quiz_service.model.QuestionWrapper;
import com.pawan.Quiz_service.model.Response;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient (name = "question-service", url = "http://localhost:8081")
//@RequestMapping("questions")
public interface QuizInterface {

    @GetMapping("questions/generate" )
    public List<Integer> getQuestionForQuiz(@RequestParam String category, @RequestParam int numQuestions);
    @PostMapping("questions/questionsByIds" )
    public List<QuestionWrapper> getQuestionsByIds(@RequestBody List<Integer> questionIds);
    @PostMapping("questions/getScore")
    public Integer calculateScore(@RequestBody List<Response> responses);
}