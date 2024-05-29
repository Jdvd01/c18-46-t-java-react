package com.booklyn.Backend.Exceptions;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
public class ResourceAlreadyExistException extends RuntimeException{

    private String message;

    public ResourceAlreadyExistException(String message){
        super(message);
        this.message = message;
    }
}
