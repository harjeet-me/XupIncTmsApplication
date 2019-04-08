package com.xupinc.tms.v1.repository.search;

import com.xupinc.tms.v1.domain.BookingItem;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the BookingItem entity.
 */
public interface BookingItemSearchRepository extends ElasticsearchRepository<BookingItem, Long> {
}
