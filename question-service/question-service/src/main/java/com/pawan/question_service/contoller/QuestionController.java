package com.pawan.question_service.contoller;


import com.pawan.question_service.model.Question;
import com.pawan.question_service.model.QuestionWrapper;
import com.pawan.question_service.model.Response;
import com.pawan.question_service.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("questions")
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @GetMapping("allQuestions")
    public List<Question> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    @GetMapping("categories/{categoryName}" )
    public List<Question> getAllQuestionsByCategory(@PathVariable String categoryName){
        return questionService.getAllQuestionsByCategory(categoryName);
    }

    @PostMapping("add")
    public String addQuestion(@RequestBody Question question){
        return questionService.addQuestion(question);
    }

    @DeleteMapping("delete/{questionId}" )
    public String deleteQuestion(@PathVariable Integer questionId){
        return questionService.deleteQuestion(questionId);
    }
    @PutMapping("update" )
    public String updateQuestion(@RequestBody Question question) {
        return questionService.addQuestion(question);
    }

    @GetMapping("generate" )
    public List<Integer> getQuestionForQuiz(@RequestParam String category, @RequestParam int numQuestions) {
        return questionService.getQuestionForQuiz(category, numQuestions);
    }
    @PostMapping("questionsByIds" )
    public List<QuestionWrapper> getQuestionsByIds(@RequestBody List<Integer> questionIds) {
        return questionService.getQuestionsByIds(questionIds);
    }
    @PostMapping("getScore")
    public Integer calculateScore(@RequestBody List<Response> responses) {
        return questionService.calculateScore(responses);
    }
}
