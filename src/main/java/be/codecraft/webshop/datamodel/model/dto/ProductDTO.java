package be.codecraft.webshop.datamodel.model.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private UUID id;
    private String name;
    private BigDecimal price;
    private String description;
    private Integer stockQuantity;
    private String categoryId;
}
