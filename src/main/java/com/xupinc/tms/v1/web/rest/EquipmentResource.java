package com.xupinc.tms.v1.web.rest;
import com.xupinc.tms.v1.domain.Equipment;
import com.xupinc.tms.v1.service.EquipmentService;
import com.xupinc.tms.v1.web.rest.errors.BadRequestAlertException;
import com.xupinc.tms.v1.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Equipment.
 */
@RestController
@RequestMapping("/api")
public class EquipmentResource {

    private final Logger log = LoggerFactory.getLogger(EquipmentResource.class);

    private static final String ENTITY_NAME = "equipment";

    private final EquipmentService equipmentService;

    public EquipmentResource(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    /**
     * POST  /equipment : Create a new equipment.
     *
     * @param equipment the equipment to create
     * @return the ResponseEntity with status 201 (Created) and with body the new equipment, or with status 400 (Bad Request) if the equipment has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/equipment")
    public ResponseEntity<Equipment> createEquipment(@RequestBody Equipment equipment) throws URISyntaxException {
        log.debug("REST request to save Equipment : {}", equipment);
        if (equipment.getId() != null) {
            throw new BadRequestAlertException("A new equipment cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Equipment result = equipmentService.save(equipment);
        return ResponseEntity.created(new URI("/api/equipment/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /equipment : Updates an existing equipment.
     *
     * @param equipment the equipment to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated equipment,
     * or with status 400 (Bad Request) if the equipment is not valid,
     * or with status 500 (Internal Server Error) if the equipment couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/equipment")
    public ResponseEntity<Equipment> updateEquipment(@RequestBody Equipment equipment) throws URISyntaxException {
        log.debug("REST request to update Equipment : {}", equipment);
        if (equipment.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Equipment result = equipmentService.save(equipment);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, equipment.getId().toString()))
            .body(result);
    }

    /**
     * GET  /equipment : get all the equipment.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of equipment in body
     */
    @GetMapping("/equipment")
    public List<Equipment> getAllEquipment() {
        log.debug("REST request to get all Equipment");
        return equipmentService.findAll();
    }

    /**
     * GET  /equipment/:id : get the "id" equipment.
     *
     * @param id the id of the equipment to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the equipment, or with status 404 (Not Found)
     */
    @GetMapping("/equipment/{id}")
    public ResponseEntity<Equipment> getEquipment(@PathVariable Long id) {
        log.debug("REST request to get Equipment : {}", id);
        Optional<Equipment> equipment = equipmentService.findOne(id);
        return ResponseUtil.wrapOrNotFound(equipment);
    }

    /**
     * DELETE  /equipment/:id : delete the "id" equipment.
     *
     * @param id the id of the equipment to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/equipment/{id}")
    public ResponseEntity<Void> deleteEquipment(@PathVariable Long id) {
        log.debug("REST request to delete Equipment : {}", id);
        equipmentService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/equipment?query=:query : search for the equipment corresponding
     * to the query.
     *
     * @param query the query of the equipment search
     * @return the result of the search
     */
    @GetMapping("/_search/equipment")
    public List<Equipment> searchEquipment(@RequestParam String query) {
        log.debug("REST request to search Equipment for query {}", query);
        return equipmentService.search(query);
    }

}
