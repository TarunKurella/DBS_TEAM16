import entity.Eqty;
import entity.Order;
import entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import repository.OrderRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class controllers {

    @Autowired
    private OrderRepository repository;

    @PostMapping("/postorder")
    @CrossOrigin
    public String savePost(@RequestBody Post post) {
        Order order = new Order();
        order.setStock(post.getStock());
        order.setQty(post.getQuantity());
        order.setEqty(0);
        order.setPrice(post.getPrice());
        order.setOs(post.getOtype());
        order.setDate(post.getDate());
        repository.save(order);

        return  "success";
        }

    @PostMapping("/executeorders")
    @CrossOrigin
       public List<Order> executeQuery(@RequestBody Eqty eqty) {
        return  repository.findExecuted(eqty.getEqty(),eqty.getprice());
    }


    @GetMapping("/getPosts")
    @CrossOrigin
    public List<Order> findAll() {
        List temp  = repository.findAll();
        if(temp.isEmpty()){
            return null;
        }

        return temp;
    }

}
