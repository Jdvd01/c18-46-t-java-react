package com.booklyn.Backend.Models.Book;

public enum ECategory {
    ACTION, ADVENTURE, EDUCATION, CHILDRENS, COMICS, MANGAS, FANTASY, SCI_FI, HISTORY, RELIGION, ART, MUSIC;

    public static boolean contains(String category) {
        for (ECategory e : ECategory.values()) {
            if (e.name().equalsIgnoreCase(category)) {
                return true;
            }
        }
        return false;
    }
}
