package com.lmsPlatform.lms_platform.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Tag(name = "Home Controller", description = "메인 화면 및 대시보드 관련 컨트롤러")
@Controller
public class HomeController {

    @Operation(summary = "메인 대시보드 페이지", description = "LMS 플랫폼의 메인 관리자 대시보드 페이지를 반환합니다.")
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "대시보드 - LMS Platform");
        model.addAttribute("pageTitle", "대시보드");
        return "admin/dashboard";
    }

}
