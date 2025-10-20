package com.pawan.Quiz_service.service;


import com.pawan.Quiz_service.dao.QuizDao;
import com.pawan.Quiz_service.feing.QuizInterface;
import com.pawan.Quiz_service.model.Question;
import com.pawan.Quiz_service.model.QuestionWrapper;
import com.pawan.Quiz_service.model.Quiz;
import com.pawan.Quiz_service.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    QuizDao quizDao;
    @Autowired
    QuizInterface quizInterface;
    public ResponseEntity<String> createQuiz(String category, Integer numQ, String title) {

        List<Integer> questionIds=quizInterface.getQuestionForQuiz(category,numQ);
        Quiz quiz=new Quiz();
        quiz.setTitle(title);
        quiz.setQuestionIds(questionIds);
        quizDao.save(quiz);
        return ResponseEntity.ok("Quiz created successfully");
    }


    public List<QuestionWrapper> getQuizById(Integer quizId) {
        Quiz quiz= quizDao.findById(quizId).get();
        List<Integer> questionIds=quiz.getQuestionIds();
        List<QuestionWrapper> questionsForQuiz=quizInterface.getQuestionsByIds(questionIds);
        return questionsForQuiz;
    }


    public Integer submitQuiz(Integer quizId, List<Response> responses) {
        int score=quizInterface.calculateScore(responses);
        return score;
    }

    public List<Quiz> getAllQuizzes() {
        return quizDao.findAll();
    }
}
