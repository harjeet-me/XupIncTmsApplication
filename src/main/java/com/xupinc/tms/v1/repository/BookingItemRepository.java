package com.xupinc.tms.v1.repository;
import com.xupinc.tms.v1.domain.BookingItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the BookingItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BookingItemRepository extends JpaRepository<BookingItem, Long> {

}
