package kajitool.web.controller;

import kajitool.web.domain.model.RecipeListView;
import kajitool.web.service.recipelist.RecipeListViewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/recipe_list_view")
public class RecipeListViewResource {
    private final RecipeListViewService service;

    public RecipeListViewResource(RecipeListViewService service) {
        this.service = service;
    }
    @GetMapping("")
    public ResponseEntity<List<RecipeListView>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }
}
