package com.xupinc.tms.v1.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of BookingSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class BookingSearchRepositoryMockConfiguration {

    @MockBean
    private BookingSearchRepository mockBookingSearchRepository;

}
