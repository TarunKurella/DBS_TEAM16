package repository;

import entity.Order;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface OrderRepository extends JpaRepository<Order, String> {

    @Query(value = "select * from order where price<?2 ")
    List<Order> findExecuted(int eqty,int eprice);

}