package com.pawan.question_service.service;


import com.pawan.question_service.dao.QuestionDao;
import com.pawan.question_service.model.Question;
import com.pawan.question_service.model.QuestionWrapper;
import com.pawan.question_service.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionDao questionDao;

    public List<Question> getAllQuestions() {
        return questionDao.findAll();
    }

    public List<Question> getAllQuestionsByCategory(String categoryName) {
        return questionDao.findByCategory(categoryName);
    }

    public String addQuestion(Question question) {
        questionDao.save(question);
        return "Question added successfully";
    }

    public String deleteQuestion(Integer questionId) {
        questionDao.deleteById(questionId);
        return "Question deleted successfully";
    }

    public List<Integer> getQuestionForQuiz(String category, int numQuestions) {
        return questionDao.findRandomQuestionByCategory(category, numQuestions);
    }

    public List<QuestionWrapper> getQuestionsByIds(List<Integer> questionIds) {
        List<QuestionWrapper> wrappers=new ArrayList<>();
        List<Question> questions=new ArrayList<>();
        for(Integer id:questionIds){
            questions.add(questionDao.findById(id).get());
        }
        for(Question q:questions) {
            QuestionWrapper wrapper = new QuestionWrapper();
            wrapper.setId(q.getId());
            wrapper.setQuestion(q.getQuestion());
            wrapper.setOptionA(q.getOptionA());
            wrapper.setOptionB(q.getOptionB());
            wrapper.setOptionC(q.getOptionC());
            wrapper.setOptionD(q.getOptionD());
            wrappers.add(wrapper);
        }
        return wrappers;
    }

    public Integer calculateScore(List<Response> responses) {
        int score=0;
        for(Response r:responses){
            Question question=questionDao.findById(r.getId()).get();
            if(question.getCorrectAnswer().equals(r.getResponse())){
                score+=1;
            }
        }
        return score;
    }
}
