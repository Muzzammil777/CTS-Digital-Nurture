package com.cognizant;

import com.cognizant.models.Account;
import org.springframework.web.bind.annotation.*;

// Account Microservice - exposes REST endpoint to retrieve account details
@RestController
@RequestMapping("accounts")
public class AccountController {

    // GET /accounts/{number} - returns account by account number
    @GetMapping("{number}")
    public Account getAccount(@PathVariable String number) {
        return new Account(number, "savings", 234343);
    }
}
