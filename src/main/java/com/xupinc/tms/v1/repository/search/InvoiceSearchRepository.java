package com.xupinc.tms.v1.repository.search;

import com.xupinc.tms.v1.domain.Invoice;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Invoice entity.
 */
public interface InvoiceSearchRepository extends ElasticsearchRepository<Invoice, Long> {
}
