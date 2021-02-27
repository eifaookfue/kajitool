package kajitool.web.view.repository;

import kajitool.web.domain.model.RecipeListView;
import kajitool.web.view.mapper.RecipeListViewMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RecipeListViewRepository {
    private final RecipeListViewMapper recipeListViewMapper;

    public RecipeListViewRepository(RecipeListViewMapper recipeListViewMapper) {
        this.recipeListViewMapper = recipeListViewMapper;
    }

    public List<RecipeListView> selectAll() {
        return recipeListViewMapper.selectAll();
    }
}
