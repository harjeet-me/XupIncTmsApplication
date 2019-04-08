package com.xupinc.tms.v1.repository.search;

import com.xupinc.tms.v1.domain.Container;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Container entity.
 */
public interface ContainerSearchRepository extends ElasticsearchRepository<Container, Long> {
}
