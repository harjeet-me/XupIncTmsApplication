package com.xupinc.tms.v1.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.Objects;

import com.xupinc.tms.v1.domain.enumeration.EquipmentEnum;

import com.xupinc.tms.v1.domain.enumeration.SizeEnum;

/**
 * A Equipment.
 */
@Entity
@Table(name = "equipment")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "equipment")
public class Equipment implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "jhi_number")
    private String number;

    @Enumerated(EnumType.STRING)
    @Column(name = "jhi_type")
    private EquipmentEnum type;

    @Enumerated(EnumType.STRING)
    @Column(name = "jhi_size")
    private SizeEnum size;

    @Column(name = "insurance")
    private String insurance;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public Equipment number(String number) {
        this.number = number;
        return this;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public EquipmentEnum getType() {
        return type;
    }

    public Equipment type(EquipmentEnum type) {
        this.type = type;
        return this;
    }

    public void setType(EquipmentEnum type) {
        this.type = type;
    }

    public SizeEnum getSize() {
        return size;
    }

    public Equipment size(SizeEnum size) {
        this.size = size;
        return this;
    }

    public void setSize(SizeEnum size) {
        this.size = size;
    }

    public String getInsurance() {
        return insurance;
    }

    public Equipment insurance(String insurance) {
        this.insurance = insurance;
        return this;
    }

    public void setInsurance(String insurance) {
        this.insurance = insurance;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Equipment equipment = (Equipment) o;
        if (equipment.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), equipment.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Equipment{" +
            "id=" + getId() +
            ", number='" + getNumber() + "'" +
            ", type='" + getType() + "'" +
            ", size='" + getSize() + "'" +
            ", insurance='" + getInsurance() + "'" +
            "}";
    }
}
