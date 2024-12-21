package be.codecraft.webshop.datamodel.model;

import jakarta.persistence.Embeddable;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class AddressDetails {
    private String street;
    private String city;
    private String state;
    private String postalCode;
    private String country;

}
