package be.codecraft.webshop.datamodel.model.dto;

import be.codecraft.webshop.controller.securityJWT.model.User;
import be.codecraft.webshop.datamodel.model.OrderItem;
import be.codecraft.webshop.datamodel.model.OrderStatus;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private UUID id;
    private String userEmail;
    private List<OrderItem> items = new ArrayList<>();
    private BigDecimal totalPrice;
    private OrderStatus orderStatus;
    private Date createdAt;
    private Date updatedAt;
}
