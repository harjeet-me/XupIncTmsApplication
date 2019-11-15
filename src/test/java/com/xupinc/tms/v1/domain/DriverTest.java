package com.xupinc.tms.v1.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.xupinc.tms.v1.web.rest.TestUtil;

public class DriverTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Driver.class);
        Driver driver1 = new Driver();
        driver1.setId(1L);
        Driver driver2 = new Driver();
        driver2.setId(driver1.getId());
        assertThat(driver1).isEqualTo(driver2);
        driver2.setId(2L);
        assertThat(driver1).isNotEqualTo(driver2);
        driver1.setId(null);
        assertThat(driver1).isNotEqualTo(driver2);
    }
}
