package com.xupinc.tms.v1.repository.search;

import com.xupinc.tms.v1.domain.Booking;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Booking entity.
 */
public interface BookingSearchRepository extends ElasticsearchRepository<Booking, Long> {
}
