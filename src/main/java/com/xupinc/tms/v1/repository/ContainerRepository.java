package com.xupinc.tms.v1.repository;

import com.xupinc.tms.v1.domain.Container;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Container entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContainerRepository extends JpaRepository<Container, Long> {

}
