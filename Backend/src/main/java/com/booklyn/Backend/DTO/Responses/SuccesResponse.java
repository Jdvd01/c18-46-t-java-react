package com.booklyn.Backend.DTO.Responses;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SuccesResponse {
    private String statusCode;
    private String message;
    private String url;
    private Object object;
}
