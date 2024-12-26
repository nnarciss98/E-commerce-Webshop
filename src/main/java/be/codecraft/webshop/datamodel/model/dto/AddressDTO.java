package be.codecraft.webshop.datamodel.model.dto;

import lombok.*;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddressDTO {
    private UUID id;
    private String userEmail;
    private String street;
    private String city;
    private String state;
    private String postalCode;
    private String country;
}