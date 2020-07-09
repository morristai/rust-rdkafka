initSidebarItems({"constant":[["RD_KAFKA_DEBUG_CONTEXTS",""],["RD_KAFKA_DESTROY_F_NO_CONSUMER_CLOSE",""],["RD_KAFKA_EVENT_ALTERCONFIGS_RESULT",""],["RD_KAFKA_EVENT_CREATEPARTITIONS_RESULT",""],["RD_KAFKA_EVENT_CREATETOPICS_RESULT",""],["RD_KAFKA_EVENT_DELETETOPICS_RESULT",""],["RD_KAFKA_EVENT_DESCRIBECONFIGS_RESULT",""],["RD_KAFKA_EVENT_DR",""],["RD_KAFKA_EVENT_ERROR",""],["RD_KAFKA_EVENT_FETCH",""],["RD_KAFKA_EVENT_LOG",""],["RD_KAFKA_EVENT_NONE",""],["RD_KAFKA_EVENT_OAUTHBEARER_TOKEN_REFRESH",""],["RD_KAFKA_EVENT_OFFSET_COMMIT",""],["RD_KAFKA_EVENT_REBALANCE",""],["RD_KAFKA_EVENT_STATS",""],["RD_KAFKA_MSG_F_BLOCK",""],["RD_KAFKA_MSG_F_COPY",""],["RD_KAFKA_MSG_F_FREE",""],["RD_KAFKA_MSG_F_PARTITION",""],["RD_KAFKA_OFFSET_BEGINNING",""],["RD_KAFKA_OFFSET_END",""],["RD_KAFKA_OFFSET_INVALID",""],["RD_KAFKA_OFFSET_STORED",""],["RD_KAFKA_OFFSET_TAIL_BASE",""],["RD_KAFKA_PURGE_F_INFLIGHT",""],["RD_KAFKA_PURGE_F_NON_BLOCKING",""],["RD_KAFKA_PURGE_F_QUEUE",""],["RD_KAFKA_VERSION",""]],"enum":[["rd_kafka_ConfigSource_t",""],["rd_kafka_ResourceType_t",""],["rd_kafka_admin_op_t",""],["rd_kafka_cert_enc_t",""],["rd_kafka_cert_type_t",""],["rd_kafka_conf_res_t",""],["rd_kafka_msg_status_t",""],["rd_kafka_resp_err_t",""],["rd_kafka_thread_type_t",""],["rd_kafka_timestamp_type_t",""],["rd_kafka_type_t",""],["rd_kafka_vtype_t",""]],"fn":[["rd_kafka_AdminOptions_destroy",""],["rd_kafka_AdminOptions_new",""],["rd_kafka_AdminOptions_set_broker",""],["rd_kafka_AdminOptions_set_opaque",""],["rd_kafka_AdminOptions_set_operation_timeout",""],["rd_kafka_AdminOptions_set_request_timeout",""],["rd_kafka_AdminOptions_set_validate_only",""],["rd_kafka_AlterConfigs",""],["rd_kafka_AlterConfigs_result_resources",""],["rd_kafka_ConfigEntry_is_default",""],["rd_kafka_ConfigEntry_is_read_only",""],["rd_kafka_ConfigEntry_is_sensitive",""],["rd_kafka_ConfigEntry_is_synonym",""],["rd_kafka_ConfigEntry_name",""],["rd_kafka_ConfigEntry_source",""],["rd_kafka_ConfigEntry_synonyms",""],["rd_kafka_ConfigEntry_value",""],["rd_kafka_ConfigResource_configs",""],["rd_kafka_ConfigResource_destroy",""],["rd_kafka_ConfigResource_destroy_array",""],["rd_kafka_ConfigResource_error",""],["rd_kafka_ConfigResource_error_string",""],["rd_kafka_ConfigResource_name",""],["rd_kafka_ConfigResource_new",""],["rd_kafka_ConfigResource_set_config",""],["rd_kafka_ConfigResource_type",""],["rd_kafka_ConfigSource_name",""],["rd_kafka_CreatePartitions",""],["rd_kafka_CreatePartitions_result_topics",""],["rd_kafka_CreateTopics",""],["rd_kafka_CreateTopics_result_topics",""],["rd_kafka_DeleteTopic_destroy",""],["rd_kafka_DeleteTopic_destroy_array",""],["rd_kafka_DeleteTopic_new",""],["rd_kafka_DeleteTopics",""],["rd_kafka_DeleteTopics_result_topics",""],["rd_kafka_DescribeConfigs",""],["rd_kafka_DescribeConfigs_result_resources",""],["rd_kafka_NewPartitions_destroy",""],["rd_kafka_NewPartitions_destroy_array",""],["rd_kafka_NewPartitions_new",""],["rd_kafka_NewPartitions_set_replica_assignment",""],["rd_kafka_NewTopic_destroy",""],["rd_kafka_NewTopic_destroy_array",""],["rd_kafka_NewTopic_new",""],["rd_kafka_NewTopic_set_config",""],["rd_kafka_NewTopic_set_replica_assignment",""],["rd_kafka_ResourceType_name",""],["rd_kafka_abort_transaction",""],["rd_kafka_assign",""],["rd_kafka_assignment",""],["rd_kafka_begin_transaction",""],["rd_kafka_brokers_add",""],["rd_kafka_clusterid",""],["rd_kafka_commit",""],["rd_kafka_commit_message",""],["rd_kafka_commit_queue",""],["rd_kafka_commit_transaction",""],["rd_kafka_committed",""],["rd_kafka_conf",""],["rd_kafka_conf_destroy",""],["rd_kafka_conf_dump",""],["rd_kafka_conf_dump_free",""],["rd_kafka_conf_dup",""],["rd_kafka_conf_dup_filter",""],["rd_kafka_conf_get",""],["rd_kafka_conf_interceptor_add_on_conf_destroy",""],["rd_kafka_conf_interceptor_add_on_conf_dup",""],["rd_kafka_conf_interceptor_add_on_conf_set",""],["rd_kafka_conf_interceptor_add_on_new",""],["rd_kafka_conf_new",""],["rd_kafka_conf_properties_show",""],["rd_kafka_conf_set",""],["rd_kafka_conf_set_background_event_cb",""],["rd_kafka_conf_set_closesocket_cb",""],["rd_kafka_conf_set_connect_cb",""],["rd_kafka_conf_set_consume_cb",""],["rd_kafka_conf_set_default_topic_conf",""],["rd_kafka_conf_set_dr_cb",""],["rd_kafka_conf_set_dr_msg_cb",""],["rd_kafka_conf_set_error_cb",""],["rd_kafka_conf_set_events",""],["rd_kafka_conf_set_log_cb",""],["rd_kafka_conf_set_oauthbearer_token_refresh_cb",""],["rd_kafka_conf_set_offset_commit_cb",""],["rd_kafka_conf_set_opaque",""],["rd_kafka_conf_set_rebalance_cb",""],["rd_kafka_conf_set_socket_cb",""],["rd_kafka_conf_set_ssl_cert",""],["rd_kafka_conf_set_ssl_cert_verify_cb",""],["rd_kafka_conf_set_stats_cb",""],["rd_kafka_conf_set_throttle_cb",""],["rd_kafka_consume",""],["rd_kafka_consume_batch",""],["rd_kafka_consume_batch_queue",""],["rd_kafka_consume_callback",""],["rd_kafka_consume_callback_queue",""],["rd_kafka_consume_queue",""],["rd_kafka_consume_start",""],["rd_kafka_consume_start_queue",""],["rd_kafka_consume_stop",""],["rd_kafka_consumer_close",""],["rd_kafka_consumer_group_metadata",""],["rd_kafka_consumer_group_metadata_destroy",""],["rd_kafka_consumer_group_metadata_new",""],["rd_kafka_consumer_group_metadata_read",""],["rd_kafka_consumer_group_metadata_write",""],["rd_kafka_consumer_poll",""],["rd_kafka_controllerid",""],["rd_kafka_default_topic_conf_dup",""],["rd_kafka_destroy",""],["rd_kafka_destroy_flags",""],["rd_kafka_dump",""],["rd_kafka_err2name",""],["rd_kafka_err2str",""],["rd_kafka_errno",""],["rd_kafka_errno2err",""],["rd_kafka_error_code",""],["rd_kafka_error_destroy",""],["rd_kafka_error_is_fatal",""],["rd_kafka_error_is_retriable",""],["rd_kafka_error_name",""],["rd_kafka_error_new",""],["rd_kafka_error_string",""],["rd_kafka_error_txn_requires_abort",""],["rd_kafka_event_AlterConfigs_result",""],["rd_kafka_event_CreatePartitions_result",""],["rd_kafka_event_CreateTopics_result",""],["rd_kafka_event_DeleteTopics_result",""],["rd_kafka_event_DescribeConfigs_result",""],["rd_kafka_event_config_string",""],["rd_kafka_event_destroy",""],["rd_kafka_event_error",""],["rd_kafka_event_error_is_fatal",""],["rd_kafka_event_error_string",""],["rd_kafka_event_log",""],["rd_kafka_event_message_array",""],["rd_kafka_event_message_count",""],["rd_kafka_event_message_next",""],["rd_kafka_event_name",""],["rd_kafka_event_opaque",""],["rd_kafka_event_stats",""],["rd_kafka_event_topic_partition",""],["rd_kafka_event_topic_partition_list",""],["rd_kafka_event_type",""],["rd_kafka_fatal_error",""],["rd_kafka_flush",""],["rd_kafka_get_debug_contexts",""],["rd_kafka_get_err_descs",""],["rd_kafka_get_watermark_offsets",""],["rd_kafka_group_list_destroy",""],["rd_kafka_header_add",""],["rd_kafka_header_cnt",""],["rd_kafka_header_get",""],["rd_kafka_header_get_all",""],["rd_kafka_header_get_last",""],["rd_kafka_header_remove",""],["rd_kafka_headers_copy",""],["rd_kafka_headers_destroy",""],["rd_kafka_headers_new",""],["rd_kafka_init_transactions",""],["rd_kafka_interceptor_add_on_acknowledgement",""],["rd_kafka_interceptor_add_on_commit",""],["rd_kafka_interceptor_add_on_consume",""],["rd_kafka_interceptor_add_on_destroy",""],["rd_kafka_interceptor_add_on_request_sent",""],["rd_kafka_interceptor_add_on_send",""],["rd_kafka_interceptor_add_on_thread_exit",""],["rd_kafka_interceptor_add_on_thread_start",""],["rd_kafka_last_error",""],["rd_kafka_list_groups",""],["rd_kafka_log_print",""],["rd_kafka_log_syslog",""],["rd_kafka_mem_free",""],["rd_kafka_memberid",""],["rd_kafka_message_destroy",""],["rd_kafka_message_detach_headers",""],["rd_kafka_message_headers",""],["rd_kafka_message_latency",""],["rd_kafka_message_set_headers",""],["rd_kafka_message_status",""],["rd_kafka_message_timestamp",""],["rd_kafka_metadata",""],["rd_kafka_metadata_destroy",""],["rd_kafka_msg_partitioner_consistent",""],["rd_kafka_msg_partitioner_consistent_random",""],["rd_kafka_msg_partitioner_fnv1a",""],["rd_kafka_msg_partitioner_fnv1a_random",""],["rd_kafka_msg_partitioner_murmur2",""],["rd_kafka_msg_partitioner_murmur2_random",""],["rd_kafka_msg_partitioner_random",""],["rd_kafka_name",""],["rd_kafka_new",""],["rd_kafka_oauthbearer_set_token",""],["rd_kafka_oauthbearer_set_token_failure",""],["rd_kafka_offset_store",""],["rd_kafka_offsets_for_times",""],["rd_kafka_offsets_store",""],["rd_kafka_opaque",""],["rd_kafka_outq_len",""],["rd_kafka_pause_partitions",""],["rd_kafka_poll",""],["rd_kafka_poll_set_consumer",""],["rd_kafka_position",""],["rd_kafka_produce",""],["rd_kafka_produce_batch",""],["rd_kafka_producev",""],["rd_kafka_purge",""],["rd_kafka_query_watermark_offsets",""],["rd_kafka_queue_cb_event_enable",""],["rd_kafka_queue_destroy",""],["rd_kafka_queue_forward",""],["rd_kafka_queue_get_background",""],["rd_kafka_queue_get_consumer",""],["rd_kafka_queue_get_main",""],["rd_kafka_queue_get_partition",""],["rd_kafka_queue_io_event_enable",""],["rd_kafka_queue_length",""],["rd_kafka_queue_new",""],["rd_kafka_queue_poll",""],["rd_kafka_queue_poll_callback",""],["rd_kafka_resume_partitions",""],["rd_kafka_seek",""],["rd_kafka_send_offsets_to_transaction",""],["rd_kafka_set_log_level",""],["rd_kafka_set_log_queue",""],["rd_kafka_set_logger",""],["rd_kafka_subscribe",""],["rd_kafka_subscription",""],["rd_kafka_test_fatal_error",""],["rd_kafka_thread_cnt",""],["rd_kafka_topic_conf_destroy",""],["rd_kafka_topic_conf_dump",""],["rd_kafka_topic_conf_dup",""],["rd_kafka_topic_conf_get",""],["rd_kafka_topic_conf_new",""],["rd_kafka_topic_conf_set",""],["rd_kafka_topic_conf_set_msg_order_cmp",""],["rd_kafka_topic_conf_set_opaque",""],["rd_kafka_topic_conf_set_partitioner_cb",""],["rd_kafka_topic_destroy",""],["rd_kafka_topic_name",""],["rd_kafka_topic_new",""],["rd_kafka_topic_opaque",""],["rd_kafka_topic_partition_available",""],["rd_kafka_topic_partition_destroy",""],["rd_kafka_topic_partition_list_add",""],["rd_kafka_topic_partition_list_add_range",""],["rd_kafka_topic_partition_list_copy",""],["rd_kafka_topic_partition_list_del",""],["rd_kafka_topic_partition_list_del_by_idx",""],["rd_kafka_topic_partition_list_destroy",""],["rd_kafka_topic_partition_list_find",""],["rd_kafka_topic_partition_list_new",""],["rd_kafka_topic_partition_list_set_offset",""],["rd_kafka_topic_partition_list_sort",""],["rd_kafka_topic_result_error",""],["rd_kafka_topic_result_error_string",""],["rd_kafka_topic_result_name",""],["rd_kafka_type",""],["rd_kafka_unittest",""],["rd_kafka_unsubscribe",""],["rd_kafka_version",""],["rd_kafka_version_str",""],["rd_kafka_wait_destroyed",""],["rd_kafka_yield",""]],"struct":[["rd_kafka_AdminOptions_s",""],["rd_kafka_ConfigEntry_s",""],["rd_kafka_ConfigResource_s",""],["rd_kafka_DeleteTopic_s",""],["rd_kafka_NewPartitions_s",""],["rd_kafka_NewTopic_s",""],["rd_kafka_conf_s",""],["rd_kafka_consumer_group_metadata_s",""],["rd_kafka_err_desc",""],["rd_kafka_error_s",""],["rd_kafka_group_info",""],["rd_kafka_group_list",""],["rd_kafka_group_member_info",""],["rd_kafka_headers_s",""],["rd_kafka_message_s",""],["rd_kafka_metadata",""],["rd_kafka_metadata_broker",""],["rd_kafka_metadata_partition",""],["rd_kafka_metadata_topic",""],["rd_kafka_op_s",""],["rd_kafka_queue_s",""],["rd_kafka_s",""],["rd_kafka_topic_conf_s",""],["rd_kafka_topic_partition_list_s",""],["rd_kafka_topic_partition_s",""],["rd_kafka_topic_result_s",""],["rd_kafka_topic_s",""]],"type":[["rd_kafka_AdminOptions_t",""],["rd_kafka_AlterConfigs_result_t",""],["rd_kafka_ConfigEntry_t",""],["rd_kafka_ConfigResource_t",""],["rd_kafka_CreatePartitions_result_t",""],["rd_kafka_CreateTopics_result_t",""],["rd_kafka_DeleteTopic_t",""],["rd_kafka_DeleteTopics_result_t",""],["rd_kafka_DescribeConfigs_result_t",""],["rd_kafka_NewPartitions_t",""],["rd_kafka_NewTopic_t",""],["rd_kafka_conf_t",""],["rd_kafka_consumer_group_metadata_t",""],["rd_kafka_error_t",""],["rd_kafka_event_t",""],["rd_kafka_event_type_t",""],["rd_kafka_headers_t",""],["rd_kafka_interceptor_f_on_acknowledgement_t",""],["rd_kafka_interceptor_f_on_commit_t",""],["rd_kafka_interceptor_f_on_conf_destroy_t",""],["rd_kafka_interceptor_f_on_conf_dup_t",""],["rd_kafka_interceptor_f_on_conf_set_t",""],["rd_kafka_interceptor_f_on_consume_t",""],["rd_kafka_interceptor_f_on_destroy_t",""],["rd_kafka_interceptor_f_on_new_t",""],["rd_kafka_interceptor_f_on_request_sent_t",""],["rd_kafka_interceptor_f_on_send_t",""],["rd_kafka_interceptor_f_on_thread_exit_t",""],["rd_kafka_interceptor_f_on_thread_start_t",""],["rd_kafka_message_t",""],["rd_kafka_metadata_broker_t",""],["rd_kafka_metadata_partition_t",""],["rd_kafka_metadata_t",""],["rd_kafka_metadata_topic_t",""],["rd_kafka_plugin_f_conf_init_t",""],["rd_kafka_queue_t",""],["rd_kafka_t",""],["rd_kafka_topic_conf_t",""],["rd_kafka_topic_partition_list_t",""],["rd_kafka_topic_partition_t",""],["rd_kafka_topic_result_t",""],["rd_kafka_topic_t",""]]});