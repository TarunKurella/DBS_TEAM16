package entity;





import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


public class Post {
    private String stock;
    private String otype;
    private int price;
    private int quantity;
    private Date date;

    public String getStock() {
        return stock;
    }

    public String getOtype() {
        return otype;
    }

    public int getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public Date getDate() {
        return date;
    }
}
