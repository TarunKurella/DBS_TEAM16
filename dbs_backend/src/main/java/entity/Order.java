package entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order  {

    @Id
    @Column(name = "sno")
    private String sno ;

    @Column(name = "stock")
    private String stock;



    @Column(name = "qty")
    private int qty ;

    @Column(name = "eqty")
    private int eqty ;

    @Column(name = "price")
    private int price ;

    @Column(name = "os")
    private String os;

    @Column(name = "date")
    private Date date;

    public void setStock(String stock) {
        this.stock = stock;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public void setEqty(int eqty) {
        this.eqty = eqty;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public java.util.Date getDate() {
        return date;
    }
}


