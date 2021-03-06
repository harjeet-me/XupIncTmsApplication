package com.xupinc.tms.v1.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(com.xupinc.tms.v1.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Booking.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Booking.class.getName() + ".bookingItems", jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Invoice.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.InvoiceItem.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Insurance.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Contact.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.BookingItem.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Equipment.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Customer.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Customer.class.getName() + ".bookings", jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Vendor.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Container.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Driver.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Driver.class.getName() + ".bookingItems", jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Location.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Region.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Country.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Department.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Department.class.getName() + ".employees", jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Task.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Task.class.getName() + ".jobs", jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Employee.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Employee.class.getName() + ".jobs", jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Job.class.getName(), jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.Job.class.getName() + ".tasks", jcacheConfiguration);
            cm.createCache(com.xupinc.tms.v1.domain.JobHistory.class.getName(), jcacheConfiguration);
            createCache(cm, com.xupinc.tms.v1.domain.Booking.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Booking.class.getName() + ".bookingItems");
            createCache(cm, com.xupinc.tms.v1.domain.Invoice.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.InvoiceItem.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Insurance.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Contact.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.BookingItem.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.BookingItem.class.getName() + ".equipment");
            createCache(cm, com.xupinc.tms.v1.domain.BookingItem.class.getName() + ".drivers");
            createCache(cm, com.xupinc.tms.v1.domain.Equipment.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Customer.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Customer.class.getName() + ".bookings");
            createCache(cm, com.xupinc.tms.v1.domain.Vendor.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Container.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Driver.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Location.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Region.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Country.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Department.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Department.class.getName() + ".employees");
            createCache(cm, com.xupinc.tms.v1.domain.Task.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Task.class.getName() + ".jobs");
            createCache(cm, com.xupinc.tms.v1.domain.Employee.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Employee.class.getName() + ".jobs");
            createCache(cm, com.xupinc.tms.v1.domain.Job.class.getName());
            createCache(cm, com.xupinc.tms.v1.domain.Job.class.getName() + ".tasks");
            createCache(cm, com.xupinc.tms.v1.domain.JobHistory.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }
}
