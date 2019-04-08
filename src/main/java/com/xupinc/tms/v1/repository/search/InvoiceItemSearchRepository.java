package com.xupinc.tms.v1.repository.search;

import com.xupinc.tms.v1.domain.InvoiceItem;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the InvoiceItem entity.
 */
public interface InvoiceItemSearchRepository extends ElasticsearchRepository<InvoiceItem, Long> {
}
