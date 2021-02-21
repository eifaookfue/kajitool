package kajitool.web.domain.model;

public class RecipeDetail {
    private Long id;
    private long recipeId;
    private long materialId;
    private int quantity;

    public Long getId() {
        return id;
    }

    public int getQuantity() {
        return quantity;
    }
}
