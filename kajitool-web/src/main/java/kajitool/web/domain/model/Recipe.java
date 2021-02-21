package kajitool.web.domain.model;

import java.util.Date;
import java.util.List;

public class Recipe {
    private Long id;
    private String name;
    private int version;
    private Date updateAt;
    private List<RecipeDetail> recipeDetails;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<RecipeDetail> getRecipeDetails() {
        return recipeDetails;
    }
}
