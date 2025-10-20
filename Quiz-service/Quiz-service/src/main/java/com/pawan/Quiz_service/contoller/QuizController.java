package com.pawan.Quiz_service.contoller;

import com.pawan.Quiz_service.model.QuestionWrapper;
import com.pawan.Quiz_service.model.Quiz;
import com.pawan.Quiz_service.model.QuizDto;
import com.pawan.Quiz_service.model.Response;
import com.pawan.Quiz_service.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("quiz")
public class QuizController {

    @Autowired
    QuizService quizService;

    @PostMapping("create")
    public ResponseEntity<String> createQuiz(@RequestBody QuizDto quizDto) {
        return quizService.createQuiz(quizDto.getCategory(), quizDto.getNumberOfQuestions(), quizDto.getTitle());
    }

    @GetMapping("get/{quizId}")
    public ResponseEntity<List<QuestionWrapper>> getQuizById(@PathVariable Integer quizId) {
        return new ResponseEntity<>(quizService.getQuizById(quizId), HttpStatus.OK);
    }

    @GetMapping("get/all")
    public ResponseEntity<List<Quiz>> getAllQuizzes() {
        return new ResponseEntity<>(quizService.getAllQuizzes(), HttpStatus.OK);
    }

    @PostMapping("submit/{quizId}")
    public ResponseEntity<Integer> submitQuiz(@PathVariable Integer quizId, @RequestBody List<Response> responses) {
        return new ResponseEntity<>(quizService.submitQuiz(quizId, responses), HttpStatus.OK);
    }
}
