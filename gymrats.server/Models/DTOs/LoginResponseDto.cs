﻿namespace gymrats.server.Models.DTOs
{
    public class LoginResponseDto
    {
        public string Token { get; set; } = null!;
        public string RefreshToken { get; set; } = null!;
        public string Message { get; set; } = null!;
    }
}
