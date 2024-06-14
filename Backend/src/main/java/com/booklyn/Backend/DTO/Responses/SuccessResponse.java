package com.booklyn.Backend.DTO.Responses;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SuccessResponse {
    private String statusCode;
    private String message;
    private String url;
    private Object object;
}
