package com.xupinc.tms.v1.repository.search;
import com.xupinc.tms.v1.domain.Insurance;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Insurance} entity.
 */
public interface InsuranceSearchRepository extends ElasticsearchRepository<Insurance, Long> {
}
